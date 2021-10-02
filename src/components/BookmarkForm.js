import React, { useState } from 'react';

function BookmarkForm(props) {
  const [song, setSong] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [year, setYear] = useState('');
  const [link, setLink] = useState('');

  const handleChange = e => {
    setSong(e.target.value);
  };

  const handleChangeArtist = e => {
    setArtist(e.target.value);
  };
  const handleChangeAlbum = e => {
    setAlbum(e.target.value);
  };
  const handleChangeYear = e => {
    setYear(e.target.value);
  };
  const handleChangeLink = e => {
    setLink(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit(song, artist, album, year, link);
  };

  const handleDelete = e => {
    e.preventDefault();
    props.handleDelete(song, artist, album, year, link);
  };

  return (
    <div className=" container form-group mt-5">
      <div>
        <img
          src="https://th.bing.com/th/id/R.73e9d6f859fd2645ca5eb400d46f1d76?rik=rqBPMdmBC3YMvA&pid=ImgRaw&r=0"
          alt=""
          width="200px"
          height="200px"
        />
      </div>
       <br />
      <h2>Music BookMark!</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Song"
          className="form-control w-100"
          onChange={handleChange}
          
        />

        <input
          type="text"
          placeholder="Artist"
          className="form-control w-100 mt-3"
          onChange={handleChangeArtist}
        />
        <input
          type="text"
          placeholder="Album"
          className="form-control w-100 mt-3"
          onChange={handleChangeAlbum}
        />
        <input
          type="text"
          placeholder="Year Released"
          className="form-control w-100 mt-3"
          onChange={handleChangeYear}
        />
        <input
          type="url"
          placeholder="https://www.google.com"
          className="form-control w-100 mt-3"
          onChange={handleChangeLink}
          pattern="https://.*"
        />

        <input type="submit" value="Add" className="mt-3" />
        <input className=" mt-2 ml-5" type="reset" />
      </form>
    </div>
  );
}

export default BookmarkForm;
