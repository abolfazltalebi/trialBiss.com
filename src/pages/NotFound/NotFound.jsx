import Button from "../../components/Button"
import notfound from "@/assets/images/404.webp"

export default function NotFound() {
    return(
        <div className="flex items-center flex-col mb-6">
            <img src={notfound} alt="" className="px-12 md:px-0 md:w-1/2" />
            <Button variant="notFountButton">back to home</Button>
        </div>
    )
}
