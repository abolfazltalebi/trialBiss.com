import logo from "@/assets/images/icons/Trial.svg";

export default function HeaderLogo() {
  return (
    <div className="flex items-center gap-1">
      <img src={logo} alt="" />
      <h1 className="capitalize font-bold">trail biss</h1>
    </div>
  );
}
