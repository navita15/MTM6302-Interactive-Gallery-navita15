document.addEventListener('DOMContentLoaded', () =>{
  const images= {
    {src: 'images/1(2).jpg , hdSrc:'images/hd/1(2).jpg',caption: 'First Image'},
     {src: 'images/2.jpg , hdSrc:'images/hd/2.jpg',caption: 'First Image'},
     {src: 'images/3.jpg , hdSrc:'images/hd/3.jpg',caption: 'First Image'},
     {src: 'images/4.jpg , hdSrc:'images/hd/4.jpg',caption: 'First Image'},
     {src: 'images/55.jpg , hdSrc:'images/hd/55.jpg',caption: 'First Image'},
     {src: 'images/6.jpg , hdSrc:'images/hd/6.jpg',caption: 'First Image'},
     {src: 'images/7.jpg , hdSrc:'images/hd/7.jpg',caption: 'First Image'},
     {src: 'images/8.jpg , hdSrc:'images/hd/8.jpg',caption: 'First Image'},
     {src: 'images/9.jpg , hdSrc:'images/hd/9.jpg',caption: 'First Image'},
     {src: 'images/10.jpg , hdSrc:'images/hd/10.jpg',caption: 'First Image'},
     {src: 'images/11.jpg , hdSrc:'images/hd/11.jpg',caption: 'First Image'},
     {src: 'images/12.jpg , hdSrc:'images/hd/12.jpg',caption: 'First Image'},
     {src: 'images/13.jpg , hdSrc:'images/hd/13.jpg',caption: 'First Image'},
     {src: 'images/14.jpg , hdSrc:'images/hd/14.jpg',caption: 'First Image'},
     {src: 'images/15.jpg , hdSrc:'images/hd/15.jpg',caption: 'First Image'},
     {src: 'images/166.jpg , hdSrc:'images/hd/16.jpg',caption: 'First Image'},
     {src: 'images/17.jpg , hdSrc:'images/hd/17.jpg',caption: 'First Image'},
     {src: 'images/18.jpg , hdSrc:'images/hd/18.jpg',caption: 'First Image'},
     {src: 'images/19.jpg , hdSrc:'images/hd/19.jpg',caption: 'First Image'},
     {src: 'images/20.jpg , hdSrc:'images/hd/20.jpg',caption: 'First Image'},
    };
      const gallery = document.getElementById('gallery');
      images.ForEach({image,index}=> {
                     const imgElement = document.createElement('img');
        imgElement.src =image.src;
        imgElement.dataset.hdsrc = image.hdsrc
        imgElement.dataset.caption = image.caption;
        imgElement.dataset.index = index;
        gallery,appendchild(imgElement);
      });
      gallery.addEventListener('click', (e) =>{
        if(e.target.tagName === 'IMG'){
          const hdSrc= e.target.dataset.hdSrc;
          const caption=e.target.dataset.caption;
          const hdImageContainer=document.createElement('div');
          hdImageContainer.id ='hd-image-container';
          hdImageContainer.style.display ='flex';

          const hdImage = document.createElement('img');
          hdImage.src = hdSrc;
          hdimagecontainer.appendChild(captionElement);
          document.body.appendchild(hdImageContainer);
          hdImage.src = hdSrc;
          hdImageContainer.add
     
