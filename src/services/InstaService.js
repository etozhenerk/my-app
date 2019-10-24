export default class InstaService {
  constructor(){
    this._apiBase = './posts.json';

  }
  
  getResource = async () => {
    const res = await fetch(`${this._apiBase}`);

    if(!res.ok){
      throw new Error(`Could not fetch ${this._apiBase}; received ${res.status}`);
    }

    return await res.json();
  }

  getAllPosts = async () => {
    const response = await this.getResource();
    const res = response.posts;
    return res;
  }

  getAllPhotos = async () =>{
    const response = await this.getResource();
    const res = response.posts;
    return res.map(this._transformPosts);
  }

  _transformPosts = (post) =>{
    return {
      src: post.src,
      alt: post.alt,
    }
  }
}