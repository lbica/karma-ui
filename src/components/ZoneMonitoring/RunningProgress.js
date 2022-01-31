import React, { Component } from "react";
import PanelHeader from "../commons/PanelHeader";

class RunningProgress extends Component {
  render() {
    return (
      <React.Fragment>
        <PanelHeader
          label="Running progress"
          panelHeadingClass="panel-heading has-border header-alt p-t-15 p-b-15"
          panelTitleClass="panel-title"
          iconClass="zmdi zmdi-run zmdi-hc-fw text-primary"
        />

        <div className="panel-body p-r-5 has-scroll">
          <div className="p-l-0 p-r-15">
            <form id="progress" className="">
              <div className="form-group">
                <label>Run Status</label>
                <input
                  className="form-control input-sm"
                  readOnly={true}
                  value="Running"
                />
              </div>
              <div className="form-group">
                <label>Currently Running Zone</label>
                <div className="input-group">
                  <input
                    className="form-control input-sm"
                    readOnly={true}
                    value="Collection"
                  />
                </div>
              </div>
              <div className="form-group">
                <label> Derivates progress</label>
                <input
                  className="form-control input-sm"
                  value="80%"
                  readOnly={true}
                />
              </div>
              <div className="form-group">
                <label> Segmentation progress</label>
                <input
                  className="form-control input-sm"
                  value="30%"
                  readOnly={true}
                />
              </div>
              <div className="form-group">
                <label> Records Processed</label>
                <input
                  className="form-control input-sm"
                  value="20%"
                  readOnly={true}
                />
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RunningProgress;
