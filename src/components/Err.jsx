
function Err({name,user}) {
    return (
        <>
            {user.name ? <h2 className="prodTitle">
                All products
                </h2> : <h2>
                You must log in at first
            </h2>}
        </>
    );
}
export default Err;Err