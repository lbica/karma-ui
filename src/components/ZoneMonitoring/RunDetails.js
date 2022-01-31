import React, { Component } from "react";
import PanelHeader from "../commons/PanelHeader";

class RunDetails extends Component {
  render() {
    return (
      <React.Fragment>
        <PanelHeader
          label="Run Details"
          panelHeadingClass="panel-heading has-border header-alt p-t-15 p-b-15"
          panelTitleClass="panel-title"
          iconClass="zmdi zmdi-run zmdi-hc-fw text-primary"
        />
        <div className="panel-body has-scroll p-l-15 p-r-5">
          <div className="p-l-0 p-r-15">
            <form id="zone_settings" className="">
              <div className="form-group">
                <label>Environment</label>
                <div className="input-group">
                  <select
                    id="runenv"
                    name="runenv"
                    size="1"
                    className="form-control input-sm"
                  >
                    <option value="selProd">Production</option>
                    <option value="selSand">SandBox</option>
                  </select>
                  <span className="input-group-btn">
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="zmdi zmdi-refresh zmdi-hc-fw text-primary" />
                    </button>
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label> Run Reference ID</label>
                <input
                  className="form-control input-sm"
                  readOnly={true}
                  value="1095687"
                />
              </div>
              <div className="form-group">
                <label> Batch ID</label>
                <input
                  className="form-control input-sm"
                  readOnly={true}
                  value="1685472"
                />
              </div>
              <div className="form-group">
                <label> Score ID</label>
                <input
                  className="form-control input-sm"
                  readOnly={true}
                  value="1985472"
                />
              </div>
              <div className="form-group">
                <label> User</label>
                <input
                  className="form-control input-sm"
                  readOnly={true}
                  value="laur.bica"
                />
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RunDetails;
