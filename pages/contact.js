import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content p-8">
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-bold text-3xl mb-10 text-center">Let's Talk!</h1>

        {/* Kontaktinformation */}
        <div className="flex  flex-col  gap-2 bg-base-300 p-6 rounded-lg shadow-md mb-12 text-left ">
          <p className="font-medium">
            Email: <span>emblaandersson@yahoo.se</span>
          </p>
          <p className="font-medium">
            Phone: <span>0707-123123</span>
          </p>
        </div>

        {/* Kontaktformulär */}
        <div className="bg-base-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="font-medium text-lg">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border rounded-md input input-bordered text-base-content"
                placeholder="Your name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className=" font-medium text-lg">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border rounded-md input input-bordered text-base-content"
                placeholder="Your email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className=" font-medium text-lg">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="w-full p-3 border rounded-md textarea textarea-bordered text-base-content"
                placeholder="Your message"></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn text-base-content px-6 py-3">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// export default function Contact() {
//   return (
//     <div className="min-h-screen bg-base-100 text-base-content p-8">
//       <section className="mb-12">
//         <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
//         <p></p>
//       </section>
//     </div>
//   );
// }
