import { useEffect, useRef, useState } from 'react';

// At build time, Vite generates a dictionary of matching files.
// By sorting the keys, we ensure numerical order.
const rawFrames = import.meta.glob('/public/frames/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });
const frameUrls = Object.keys(rawFrames)
  .sort((a, b) => {
    // Extract numbers from filenames to sort numerically rather than alphabetically
    const numA = parseInt(a.replace(/[^0-9]/g, '')) || 0;
    const numB = parseInt(b.replace(/[^0-9]/g, '')) || 0;
    return numA - numB;
  })
  .map(key => (rawFrames as Record<string, string>)[key]);

export default function ScrollAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (frameUrls.length === 0) return;

    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    // Efficient Preloading
    frameUrls.forEach((url, i) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount++;
        images[i] = img; // maintain numerical order
        if (loadedCount === 1) {
          // Render first frame as soon as possible
          renderImage(images[0] || img);
        }
        if (loadedCount === frameUrls.length) {
          setLoaded(true);
        }
      };
    });
    
    framesRef.current = images;

    const renderImage = (image: HTMLImageElement) => {
      const canvas = canvasRef.current;
      if (!canvas || !image || !image.complete) return;
      
      const context = canvas.getContext('2d');
      if (!context) return;

      const canvasAspect = canvas.width / canvas.height;
      const imgAspect = image.width / image.height;
      
      let drawWidth, drawHeight, offsetX, offsetY;
      
      if (canvasAspect > imgAspect) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgAspect;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgAspect;
        offsetY = 0;
        offsetX = (canvas.width - drawWidth) / 2;
      }
      
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    };

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      handleScroll();
    };

    const handleScroll = () => {
      if (frameUrls.length === 0) return;
      
      const scrollTop = document.documentElement.scrollTop;
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      
      if (maxScrollTop <= 0) return;

      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameUrls.length - 1,
        Math.max(0, Math.floor(scrollFraction * frameUrls.length))
      );

      requestAnimationFrame(() => {
        if (framesRef.current[frameIndex]) {
          renderImage(framesRef.current[frameIndex]);
        }
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none bg-[#050505]">
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-50'}`}
      />
    </div>
  );
}
