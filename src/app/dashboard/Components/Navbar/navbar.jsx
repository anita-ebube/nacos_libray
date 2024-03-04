const Navbar = () => {
  return (
    <>
      <nav className="fixed flex justify-end items-center gap-10 p-6 bg-white drop-shadow w-full">
        <img src="/icons/notification.svg" alt="" />
        <img src="/images/notes/profile.png" alt="" height={1/2} />
        <p className="text-center lg:text-2xl text-[10px]">Ugoebillah Anita</p>
      </nav>
    </>
  );
};
export default Navbar;
