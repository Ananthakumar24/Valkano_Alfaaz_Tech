export default function TermsAndConditions() {
  return (
    <div className="flex flex-col w-full pt-32 px-6 max-w-4xl mx-auto pb-24 text-gray-300">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">Terms and Conditions</h1>
      <p className="mb-6 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
      
      <div className="space-y-8 text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
          <p>
            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Valkano Alfaaz Technologies ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">3. User Representations</h2>
          <p>
            By using the Site, you represent and warrant that:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>All registration information you submit will be true, accurate, current, and complete.</li>
            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
            <li>You have the legal capacity and you agree to comply with these Terms and Conditions.</li>
            <li>You are not a minor in the jurisdiction in which you reside.</li>
            <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">4. Governing Law</h2>
          <p>
            These Terms shall be governed by and defined following the laws of our operating jurisdiction. Valkano Alfaaz Technologies and yourself irrevocably consent that the courts of our operating jurisdiction shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
          </p>
        </section>
      </div>
    </div>
  );
}
