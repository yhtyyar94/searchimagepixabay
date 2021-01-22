import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GridList, GridTile, IconButton } from 'material-ui';
import { ActionZoomIn } from 'material-ui/svg-icons';




class ImageResult extends Component {
    render() {
        let imageListContent;
        const {images} = this.props

        if (images) {
            imageListContent = (
                <GridList cols={3}>
                    {images.map(img => (
                        <GridTile
                        title={img.tags}
                        key={img.id}
                        subtitle={
                            <span>
                                by <strong>{img.user}</strong>
                            </span>
                        }
                        actionIcon={
                            <IconButton>
                                <ActionZoomIn color="white"/>
                            </IconButton>
                        }
                        >
                        <img src={img.largeImageURL} alt=""/>
                        </GridTile>
                    ))}
                </GridList>
            )
        } else {
            imageListContent =null
        }

        return (
            
            <div>
                {imageListContent}
            </div>
        )
    }
}

ImageResult.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImageResult