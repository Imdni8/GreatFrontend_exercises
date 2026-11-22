import { FaArrowRight } from "react-icons/fa6";
export default function ButtonArrowRight({ children, onClick }) {
    return (
        <div className="btn-arrow-right">
            <a href="#">{children}</a>
            <FaArrowRight />
        </div>
    );
}
