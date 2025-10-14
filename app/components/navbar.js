export default function Navbar() {
  return (
    <nav className="flex gap-8 font-semibold text-xl py-4 fixed bg-black w-full top-0 px-8">
      <a href="#" className="hover:scale-105 hover:text-gray-300">Home</a>
      <a href="#about"  className="hover:scale-105 hover:text-gray-300">About Me</a>
      <a href="#projects" className="hover:scale-105 hover:text-gray-300" >Projects</a>
    </nav>
  )
}