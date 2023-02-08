//create = create-blogpost

import {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Kamesiepo');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false);
      history.push('/');
    })
  }

  return (
    <div className="create-blogpost">
      <h2>Create New Blogpost</h2>
      <form onSubmit={handleSubmit}>
        <label>Title of Blog</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
          <label>Blog Content Body:</label>
          <textarea required value={body} onChange={(e) => setBody(e.target.value)}/>
          <label>Post Author:</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="Dohle">T. Dohle</option>
            <option value="Pashkovska">O. Pashkovska</option>
            <option value="Lepak">A. Lepak</option>
            <option value="Feld">N. Feld</option>
          </select>

          {!isPending && <button>Add Blogpost</button>}
          {isPending && <button disabled>Add Blogpost</button>}

      </form>
    </div>
  );
}

export default CreatePost