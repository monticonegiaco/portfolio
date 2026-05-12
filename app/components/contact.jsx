export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <div className="mt-4 flex w-full justify-center">
        <form className="flex flex-col gap-2">
          <label htmlFor="name">Nombre</label>
          <input type="text" placeholder="Nombre" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea placeholder="Message" id="message" />
          <button
            type="submit"
            className="border-2 border-black p-2 rounded-md"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
