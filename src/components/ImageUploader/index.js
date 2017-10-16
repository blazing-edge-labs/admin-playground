import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AvatarEditor from 'react-avatar-editor'

import { Button } from 'react-toolbox/lib/button'
import Slider from 'react-toolbox/lib/slider'
import './styles.scss'

class ImageUploader extends Component {
  constructor (props) {
    super(props)

    this.state = {
      image: null,
      dataURI: null,
      scale: 1.1,
      editing: false,
      dropped: false
    }

    this.handleNewImage = this.handleNewImage.bind(this)
    this.handleScale = this.handleScale.bind(this)
    this.setEditorRef = this.setEditorRef.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.toggleEditMode = this.toggleEditMode.bind(this)
    this.openPicker = this.openPicker.bind(this)
    this.onDropFile = this.onDropFile.bind(this)
  }

  toggleEditMode () {
    const { editing } = this.state

    this.setState({ editing: !editing })
  }

  openPicker () {
    this.refs.hiddenUpload.click()
  }

  onDropFile (e) {
    this.setState({
      dropped: true
    })
  }

  handleSave (data) {
    const { input, handleChange } = this.props
    const img = this.editor.getImageScaledToCanvas().toDataURL()

    this.setState({
      image: null,
      dropped: false,
      scale: 1.1,
      dataURI: img
    })
    this.toggleEditMode()
    input.onChange(img)

    if (handleChange) handleChange(img)
  }

  handleNewImage (e) {
    this.setState({
      image: e.target.files[0]
    })
  }

  setEditorRef (ref) {
    if (ref) this.editor = ref
  }

  handleScale (val) {
    const scale = parseFloat(val)
    this.setState({ scale })
  }

  renderEditing () {
    const { image, scale, dropped } = this.state

    return (
      <div styleName='container'>
        <AvatarEditor
          ref={this.setEditorRef}
          width={250}
          height={250}
          image={image}
          scale={scale}
          onDropFile={this.onDropFile}
        />
        <input
          ref='hiddenUpload'
          styleName='hidden'
          name='newImage'
          type='file'
          onChange={this.handleNewImage}
        />
        <div styleName={image || dropped ? '' : 'hidden'}>
          Zoom:
          <Slider
            value={scale}
            onChange={this.handleScale}
            min={1}
            max={5}
            step={0.1}
          />
        </div>
        <div styleName='buttonContainer'>
          <Button styleName='button' raised onClick={this.toggleEditMode}>
            Cancel
          </Button>
          <Button
            styleName='button'
            primary
            raised
            onClick={image || dropped ? this.handleSave : this.openPicker}
          >
            {image || dropped ? 'Save' : 'Choose an image'}
          </Button>
        </div>
      </div>
    )
  }

  renderImage () {
    const { input: { value } } = this.props
    const { dataURI } = this.state

    return (
      <div>
        <img styleName='photo' src={dataURI || value} />
        <div styleName={dataURI || value ? 'buttonContainer' : ''}>
          <Button styleName='photo' raised onClick={this.toggleEditMode}>
            Upload new photo
          </Button>
        </div>
      </div>
    )
  }

  render () {
    const { editing } = this.state

    if (editing) return this.renderEditing()

    return this.renderImage()
  }
}

ImageUploader.propTypes = {
  input: PropTypes.object.isRequired,
  handleChange: PropTypes.func
}

export default ImageUploader
