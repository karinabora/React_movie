

const Delete = ({ onDelete }) => {
    return (
        <div className="delete">
            <img
                className="delete-icon"
                src="dislike.png"
                onclick={ondislike}
            />
        </div>
    );
};
export default Delete;


