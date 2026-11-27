export default function IconBtn({ children }) {
    return (
        <button className="icon-btn">
            <img src={children} />
        </button>
    );
}
