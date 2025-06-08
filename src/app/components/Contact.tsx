export default function Contact() {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <p className="text-sage-700 text-lg leading-relaxed">
            If you have any questions or feedback, please don&#39;t hesitate to contact us.
          </p>
          <p className="text-sage-700 text-lg leading-relaxed">
            Email: <a href="mailto:hello@nutmeghealth.com">nutmeghealth@gmail.com</a>
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Want Coaching?</h3>
          <p className="text-sage-700 text-lg leading-relaxed">
            Nutmeg Coaching is Health Coaching for those that need an extra push.
          </p>
          <button className=" text-white px-6 py-2 rounded-lg bg-emerald-700 transition-transform hover:scale-105">Book a Session</button>
        </div>
      </div>
    </div>
  )
} 