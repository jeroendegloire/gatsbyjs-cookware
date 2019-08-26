import React, { Component } from 'react'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"

export class Cities extends Component {
  openPopupbox() {
    const content = (
      <div>
        <p className="quotes">Work like you don't need the money.</p>
        <p className="quotes">Dance like no one is watching.</p>
        <p className="quotes">And love like you've never been hurt.</p>
        <span className="quotes-from">― Mark Twain</span>
      </div>
    )
    PopupboxManager.open({ content })
  }

  render() {
    return (
      <div>
        <div class="row justify-content-center">
          <div class="col-md-11 col-lg-7 col-sm-12 ">
            <div class="city-name-inner">
              <div class="city-name">
                <button className="dark-perot city-1" onClick={this.openPopupbox}>Belgium</button>
              </div>
            </div>
          </div>
        </div>
        <PopupboxContainer />
      </div>
    )
  }
}
