const Create = () => {
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <div className="form-items">
                    <label>Blog Title:</label>
                    <input
                        type="text"
                        required
                    />
                </div>
                <div className="form-items">
                    <label>Blog Body:</label>
                    <textarea
                        required
                    ></textarea>
                </div>                
                <div className="form-items">
                <label>Blog Author:</label>
                    <select>
                        <option value="Yaz">Yaz</option>
                        <option value="Yaz">Yaz</option>
                        <option value="Yaz">Yaz</option>
                    </select>
                </div>   
                <button>Add Blog</button>
            </form>    
        </div>
    );
}
 
export default Create;