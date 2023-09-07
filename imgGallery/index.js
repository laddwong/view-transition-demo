const imgsName = ['jungle-coast', 'tree-bird', 'view-from-the-sky', 'watery-view']
    const galleryList = document.getElementById('galleryList')
    const imgPreview = document.getElementById('imgPreview')
    const imgTitle = document.getElementById('imgTitle')
    imgsName.forEach(img => {
      const imgEl = new Image()
      imgEl.src = imgPreview.src = `./imgs/${img}.jpg`
      imgEl.alt = imgTitle.innerText = img
      galleryList.append(imgEl)
      imgEl.onclick = function() {
        const transition = document.startViewTransition(() => {
          imgPreview.src = this.src
          imgTitle.innerText = this.alt
        })
      }
    })