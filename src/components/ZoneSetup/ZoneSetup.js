import React from 'react';
import UiButton from '../UI/UIButton';

const ZoneSetup = () => {
    return (
        <div className="p-l-0 p-r-15">
            <p>
                <small className="m-b-10 b-b">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
            </p>
            <form id="zone_settings" className="">
                <div className="form-group">
                    <label>Name</label>
                    <div className="input-group">
                        <input id="name" name="name" className="form-control input-sm"
                            type="text" />
                        <span className="input-group-btn">
                            <UiButton title="Save"/>
                            <UiButton title="Delete"/>
                        </span>
                    </div>
                </div>
                <div className="form-group">
                    <label>Group Type</label>
                    <select id="status" name="status" size="1"
                        className="form-control input-sm">
                        <option value="1">Asynchronous (Batch)</option>
                        <option value="2">Synchronous (On-Line)</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <select id="status" name="status" size="1"
                        className="form-control input-sm">
                        <option value="Active">Active</option>
                        <option value="Suspended">Suspended</option>
                        <option value="Archived">Archived</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Alias</label>
                    <select id="alias" name="alias" size="1"
                        className="form-control input-sm">
                        <option value="Collection">Collection</option>
                        <option value="Acquisition">Acquisition</option>
                        <option value="Acquisition2">Acquisition2</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Qualification Criteria</label>
                    <input id="qualification" name="qualification"
                        className="form-control input-sm" type="text" />
                </div>
                <div className="form-group">
                    <label>Notes</label>
                    <input id="notes" name="notes" className="form-control input-sm"
                        type="text" />
                </div>
                <div className="form-group">
                    <label>Start Strategy</label>
                    <select id="start" name="start" size="1"
                        className="form-control input-sm">
                        <option value="Start">Start</option>
                        <option value="Score Business">Score Business</option>
                        <option value="Score Consumers">Score Consumers</option>
                    </select>
                </div>
                <div className="form-group">
                    <br />
                    <small>Zones moved to production will change status to
                        SUSPENDED.</small>
                    <small>After moving, select the zone in production and activate it
                        manually.</small><br />
                    <small>You might need to suspend the old zone before activating the
                        new one.</small><br />
                </div>
            </form>
        </div>
    );
}

export default ZoneSetup;
