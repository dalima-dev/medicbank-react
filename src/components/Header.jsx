function Header({ openRegisterModal }) {
  return (
    <header className="m-2 p-5 flex justify-around items-center gap-4 bg-blue-400 rounded">
      <h1 className="sm:text-3xl text-xl font-bold">Welcome to MedicBank!</h1>
      <button
        className="p-3 rounded bg-blue-800 shadow-lg shadow-blue-800/80 transition duration-300 ease-in-out hover:scale-110"
        onClick={openRegisterModal}
      >
        Register
      </button>
    </header>
  );
}

export default Header;
