import React, { Component } from 'react'
import AvatarEditor from 'react-avatar-editor'

import { Button } from 'react-toolbox/lib/button'
import './styles.scss'

// TODO: Redux
// TODO: Preview
// TODO: interface for both previewing and editing the image

class ImageUploader extends Component {
  constructor (props) {
    super(props)

    this.state = {
      image: null,
      scale: 1,
      editing: false
    }

    this.handleNewImage = this.handleNewImage.bind(this)
    this.handleScale = this.handleScale.bind(this)
    this.setEditorRef = this.setEditorRef.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.toggleEditMode = this.toggleEditMode.bind(this)
  }

  toggleEditMode () {
    const { editing } = this.state

    this.setState({ editing: !editing })
  }

  handleSave (data) {
    const img = this.editor.getImageScaledToCanvas().toDataURL()

    console.log(img)
  }

  handleNewImage (e) {
    this.setState({
      image: e.target.files[0]
    })
  }

  setEditorRef (ref) {
    if (ref) this.editor = ref
  }

  handleScale (e) {
    const scale = parseFloat(e.target.value)
    this.setState({ scale })
  }

  renderEditing () {
    const { image, scale } = this.state

    return (
      <div styleName='container'>
        <AvatarEditor
          ref={this.setEditorRef}
          width={250}
          height={250}
          image={image}
          scale={scale}
        />
        <div>
          <input name='newImage' type='file' onChange={this.handleNewImage} />
        </div>
        <div>
          Zoom:
          <input
            name='scale'
            type='range'
            onChange={this.handleScale}
            min={'1'}
            max='5'
            step='0.01'
            defaultValue='1'
          />
        </div>
        <div>
          <input type='button' onClick={this.handleSave} value='Preview' />
        </div>
        <div>
          <Button styleName='button' raised onClick={this.toggleEditMode}>
            Cancel
          </Button>
          <Button styleName='button' raised onClick={this.toggleEditMode}>
            Save
          </Button>
        </div>
      </div>
    )
  }

  renderImage () {
    return (
      <div>
        <img styleName='photo' src='https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg' />
        <div>
          <Button styleName='photo' raised onClick={this.toggleEditMode}>
            Upload new photo
          </Button>
        </div>
      </div>
    )
  }

  render () {
    const { editing } = this.state

    if (editing) {
      return this.renderEditing()
    }

    return this.renderImage()
  }
}

export default ImageUploader
