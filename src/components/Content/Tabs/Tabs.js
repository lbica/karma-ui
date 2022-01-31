import React from 'react';
import PropTypes from 'prop-types';


import Tab from './Tab';
import ZoneSetup from '../../ZoneSetup/ZoneSetup';
import PanelHeading from '../../UI/PanelHeading';




const Tabs = (props) => {

    // const tabs = React.Children.toArray(props.children).filter(p => p.type === Tab);

    // const tabHeadersContent = React.Children.toArray(tabs.props.children).filter(p1 => p1.type === TabHeader)
    //     .map(p2 =>
    //         <TabHeader title={p2.title} active={p2.active} refTabContent={p2.refTabContent} iconClassName="zmdi-flower" />);

    // const tabContent = React.Children.toArray(props.children).filter(p => p.type === TabContent);




    return (

        <div role="tabpanel">
            <ul className="tab-nav-asf" role="tablist">
                <li className="active"><a href="#home12" aria-controls="home12" role="tab" data-toggle="tab"
                    aria-expanded="false"><i className="zmdi zmdi-flower zmdi-hc-fw zmdi-hc"></i> Zone Setup</a>
                </li>
                <li className="tabzone"><a href="#home13" aria-controls="home13" role="tab" data-toggle="tab"
                    aria-expanded="false"><i className="zmdi zmdi-flower zmdi-hc-fw zmdi-hc"></i> Zone
                    Monitoring</a></li>
                <li className="tabzone"><a href="#profile12" aria-controls="profile12" role="tab" data-toggle="tab"
                    aria-expanded="true"><i className="zmdi zmdi-equalizer  zmdi-hc-fw zmdi-hc"></i> Decisions</a>
                </li>
            </ul>
            <div className="tab-content p-t-0 p-b-0">
                <div role="tabpanel" className="tab-pane active" id="home12">
                    <div className="row">
                        <div className="col-xs-4 col-lg-4 p-l-0 p-r-0">
                            <div className="panel panel-inline m-0">
                                <PanelHeading title="Settings" icon="zmdi-tune"/>
                                <div className="panel-body has-scroll p-l-15 p-r-5">
                                    <ZoneSetup />
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-4 col-lg-4 p-l-0 p-r-0">
                            <div className="panel panel-inline m-0 b-l b-r">
                            <PanelHeading title="Variables" icon="zmdi-broken-image"/>
                                <div className="panel-body p-r-5 has-scroll">
                                    <ul className="list-group clear-list m-b-0">
                                        <li className="list-group-item first-item">
                                            <ul className="actions pull-right">
                                                <li><a href=""><i className="zmdi zmdi-cloud-done"></i></a></li>
                                            </ul>
                                            <i className="zmdi zmdi-flight-land"></i>
                                            <i className="zmdi zmdi-font"></i>
                                            CUST_BUSINESS_TYPE
                                        </li>
                                        <li className="list-group-item">
                                            <ul className="actions pull-right">
                                                <li><a href=""><i className="zmdi zmdi-cloud-done"></i></a></li>
                                            </ul>
                                            <i className="zmdi zmdi-flight-land"></i>
                                            <i className="zmdi zmdi-n-1-square"></i>
                                            PAY_CNT_12M
                                        </li>
                                        <li className="list-group-item">
                                            <ul className="actions pull-right">
                                                <li><a href=""><i className="zmdi zmdi-cloud-off"></i></a></li>
                                            </ul>
                                            <i className="zmdi zmdi-flight-land"></i>
                                            <i className="zmdi zmdi-calendar-alt"></i>
                                            BIRTH_DATE
                                        </li>
                                        <li className="list-group-item">
                                            <ul className="actions pull-right">
                                                <li><a href=""><i className="zmdi zmdi-cloud-done"></i></a></li>
                                            </ul>
                                            <i className="zmdi zmdi-flight-takeoff"></i>
                                            <i className="zmdi zmdi-n-1-square"></i>
                                            SCORE
                                        </li>
                                        <li className="list-group-item">
                                            <ul className="actions pull-right">
                                                <li><a href=""><i className="zmdi zmdi-cloud-done"></i></a></li>
                                            </ul>
                                            <i className="zmdi zmdi-flight-takeoff"></i>
                                            <i className="zmdi zmdi-font"></i>
                                            COLL_PLAN
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-4 col-lg-4 p-l-0 p-r-0">
                        </div>
                    </div>
                </div>

                <div role="tabpanel" className="tab-pane" id="home13">
                    <div className="row">
                        <div className="col-xs-4 col-lg-4 p-l-0 p-r-0">
                            <div className="panel panel-inline m-0">
                                <PanelHeading title="Settings" icon="zmdi-tune"/>
                                <div className="panel-body has-scroll p-l-15 p-r-5">
                                    <div className="p-l-0 p-r-15">
                                        <p>
                                            <small className="m-b-10 b-b">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
                                        </p>
                                        <form id="zone_settings" className="">
                                            <div className="form-group">
                                                <label>Action</label>
                                                <div className="input-group">
                                                    <select id="action" name="action" size="1"
                                                        className="form-control input-sm">
                                                        <option value="Run">Run Zone</option>
                                                        <option value="Copy">Copy to Sandbox</option>
                                                        <option value="Move">Move to Production</option>
                                                    </select>
                                                    <span className="input-group-btn">
                                                        <button type="button" className="btn btn-default btn-sm"><i
                                                            className="zmdi zmdi-flash zmdi-hc-fw text-primary"></i></button>
                                                    </span>
                                                </div>
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
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-4 col-lg-4 p-l-0 p-r-0">
                            <div className="panel panel-inline m-0">
                                <div className="panel-heading has-border header-alt p-t-15 p-b-15">
                                    <h2 className="panel-title">
                                        <ul className="actions pull-right">
                                            <li><a href=""><i className="zmdi zmdi-refresh-alt"></i></a></li>
                                            <li><a href=""><i className="zmdi zmdi-flash-auto"></i></a></li>
                                        </ul>
                                        <i className="zmdi zmdi-sort-amount-asc zmdi-hc-fw text-primary"></i>
                                        Running progress
                                    </h2>
                                </div>
                                <div className="panel-body p-r-5 has-scroll">
                                    <div className="p-l-0 p-r-15">
                                        <form id="progress" className="">
                                            <div className="form-group">
                                                <label> Environment</label>
                                                <input className="form-control input-sm" readonly="" value="Production" />
                                            </div>
                                            <div className="form-group">
                                                <label> Run Reference ID</label>
                                                <input className="form-control input-sm" readonly="" value="1095687" />
                                            </div>
                                            <div className="form-group">
                                                <label> Batch ID</label>
                                                <input className="form-control input-sm" readonly="" value="1685472" />
                                            </div>
                                            <div className="form-group">
                                                <label> Score ID</label>
                                                <input className="form-control input-sm" readonly="" value="1985472" />
                                            </div>
                                            <div className="form-group">
                                                <label> User</label>
                                                <input className="form-control input-sm" readonly="" value="laur.bica" />
                                            </div>
                                            <div className="form-group">
                                                <label> Derivates progress</label>
                                                <input className="form-control input-sm" readonly="" value="80%" />
                                            </div>
                                            <div className="form-group">
                                                <label> Segmentation progress</label>
                                                <input className="form-control input-sm" readonly="" value="30%" />
                                            </div>
                                            <div className="form-group">
                                                <label> Records Processed</label>
                                                <input className="form-control input-sm" readonly="" value="20%" />
                                            </div>
                                            <div className="form-group">
                                                <label>Run Status</label>
                                                <input className="form-control input-sm" readonly="" value="Running" />
                                            </div>
                                            <div className="form-group">
                                                <label>Currently Running Zone</label>
                                                <div className="input-group">
                                                    <input className="form-control input-sm" readonly=""
                                                        value="Collection" />
                                                    <span className="input-group-btn">
                                                        <button type="button" className="btn btn-default btn-sm"><i
                                                            className="zmdi zmdi-mail-reply zmdi-hc-fw text-primary"></i></button>
                                                    </span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div role="tabpanel" className="tab-pane" id="profile12">
                    <div className="row">
                        <div className="col-xs-4 col-lg-4 p-l-0 p-r-0">
                            <div className="panel panel-inline m-0">
                                <div className="panel-heading has-border header-alt p-t-15 p-b-15">
                                    <h2 className="panel-title"><i className="zmdi zmdi-tune zmdi-hc-fw text-primary"></i>
                                        Strategies</h2>
                                </div>
                                <div className="panel-body p-r-5 has-scroll">
                                    <ul className="list-group clear-list m-b-0">
                                        <li className="list-group-item first-item">
                                            <ul className="actions pull-right">
                                                <li><a href=""><i className="zmdi zmdi-play"></i></a></li>
                                                <li><a href=""><i className="zmdi zmdi-edit"></i></a></li>
                                                <li><a href=""><i className="zmdi zmdi-refresh"></i></a></li>
                                            </ul><a href="#">Cras justo odio</a>
                                        </li>
                                        <li className="list-group-item">
                                            <ul className="actions pull-right">
                                                <li><a href=""><i className="zmdi zmdi-play"></i></a></li>
                                                <li><a href=""><i className="zmdi zmdi-edit"></i></a></li>
                                                <li><a href=""><i className="zmdi zmdi-refresh"></i></a></li>
                                            </ul><a href="#">Dapibus ac facilisis in</a>
                                        </li>
                                        <li className="list-group-item">
                                            <ul className="actions pull-right">
                                                <li><a href=""><i className="zmdi zmdi-play"></i></a></li>
                                                <li><a href=""><i className="zmdi zmdi-edit"></i></a></li>
                                                <li><a href=""><i className="zmdi zmdi-refresh"></i></a></li>
                                            </ul><a href="#">Morbi leo risus</a>
                                        </li>
                                        <li className="list-group-item">
                                            <ul className="actions pull-right">
                                                <li><a href=""><i className="zmdi zmdi-play"></i></a></li>
                                                <li><a href=""><i className="zmdi zmdi-edit"></i></a></li>
                                                <li><a href=""><i className="zmdi zmdi-refresh"></i></a></li>
                                            </ul><a href="#">Porta ac consectetur ac</a>
                                        </li>
                                        <li className="list-group-item">
                                            <ul className="actions pull-right">
                                                <li><a href=""><i className="zmdi zmdi-play"></i></a></li>
                                                <li><a href=""><i className="zmdi zmdi-edit"></i></a></li>
                                                <li><a href=""><i className="zmdi zmdi-refresh"></i></a></li>
                                            </ul><a href="#">Vestibulum at eros</a>
                                        </li>
                                        <li className="list-group-item">Cras justo odio</li>
                                        <li className="list-group-item">Dapibus ac facilisis in</li>
                                        <li className="list-group-item">Morbi leo risus</li>
                                        <li className="list-group-item">Porta ac consectetur ac</li>
                                        <li className="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                    <div className="panel-heading has-border header-alt p-t-15 p-b-15">
                                        <h2 className="panel-title"><i
                                            className="zmdi zmdi-search zmdi-hc-fw text-primary"></i> Trace account
                                        </h2>
                                    </div>
                                    <div className="panel-body p-r-5 p-l-5 has-scroll"
                                    >
                                        <div className="form-group">
                                            <label>Run Date</label>
                                            <div className="input-group">
                                                <input id="rundate" name="rundate" className="form-control input-sm"
                                                    type="text" />
                                                <span className="input-group-btn">
                                                    <button type="button" className="btn btn-default btn-sm"><i
                                                        className="zmdi zmdi-flash zmdi-hc-fw text-primary"></i></button>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Batch</label>
                                            <select id="batch" name="batch" size="1" className="form-control input-sm">
                                                <option value="Batch1">Batch 1</option>
                                                <option value="Batch2">Batch 2</option>
                                                <option value="Batch3">Batch 3</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Score ID</label>
                                            <select id="score" name="score" size="1" className="form-control input-sm">
                                                <option value="Score1">Score 1</option>
                                                <option value="Score2">Score 2</option>
                                                <option value="Score3">Score 3</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input id="account" name="account" className="form-control input-sm"
                                                    type="text" />
                                                <span className="input-group-btn">
                                                    <button type="button" className="btn btn-default btn-sm"><i
                                                        className="zmdi zmdi-search zmdi-hc-fw text-primary"></i></button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-4 col-lg-4 p-l-0 p-r-0">
                            <div className="panel panel-inline m-0 b-l b-r">
                                <div className="panel-heading has-border header-alt p-t-15 p-b-15">
                                    <h2 className="panel-title">
                                        <i className="zmdi zmdi-device-hub zmdi-hc-fw text-primary"></i> Trees
                                    </h2>
                                </div>
                                <div className="panel-body p-l-0 p-r-5 p-t-10 has-scroll"
                                >
                                    <div className="k-tree">
                                        <div className="tree-root">
                                            <div className="tree-branch tree-branch-last">
                                                <div className="tree-node">
                                                    <a href="#" className="tree-junction-expanded">&nbsp;</a>
                                                    <span className="tree-content">
                                                        <a href="#" className="tree-content-node">
                                                            <span className="tree-label">Task type</span>
                                                        </a>
                                                    </span>
                                                </div>
                                                <div className="tree-subtree">
                                                    <div className="tree-branch tree-branch-mid">
                                                        <div className="tree-node">
                                                            <a href="#" className="tree-junction-collapsed">&nbsp;</a>
                                                            <span className="tree-content">
                                                                <a href="#" className="tree-content-node">
                                                                    <span className="tree-label">Monitorizare
                                                                        retea</span>
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="tree-branch tree-branch-last">
                                                        <div className="tree-node">
                                                            <a href="#" className="tree-junction-expanded">&nbsp;</a>
                                                            <span className="tree-content">
                                                                <a href="#" className="tree-content-node selected">
                                                                    <span className="tree-label">Retea</span>
                                                                </a>
                                                            </span>
                                                        </div>
                                                        <div className="tree-subtree">
                                                            <div className="tree-branch tree-branch-mid">
                                                                <div className="tree-node">
                                                                    <a href="#"
                                                                        className="tree-junction-expanded">&nbsp;</a>
                                                                    <span className="tree-content">
                                                                        <a href="#" className="tree-content-node">
                                                                            <span className="tree-label">CLICOM</span>
                                                                        </a>
                                                                    </span>
                                                                </div>
                                                                <div className="tree-subtree">
                                                                    <div className="tree-branch tree-branch-mid">
                                                                        <div className="tree-node">
                                                                            <a href="#"
                                                                                className="tree-junction-collapsed">&nbsp;</a>
                                                                            <span className="tree-content">
                                                                                <a href="#"
                                                                                    className="tree-content-node">
                                                                                    <span className="tree-label"><i
                                                                                        className="fa fa-folder"></i>(M)
                                                                                        CLICOM Analiza manuala
                                                                                        client</span>
                                                                                </a>
                                                                            </span>
                                                                        </div>
                                                                        <div className="tree-subtree">
                                                                            <div
                                                                                className="tree-branch tree-branch-mid">
                                                                                <div className="tree-node">
                                                                                    <a
                                                                                        className="tree-junction">&nbsp;</a>
                                                                                    <span className="tree-content">
                                                                                        <a href="#"
                                                                                            className="tree-content-leaf">
                                                                                            <span
                                                                                                className="tree-label"><i
                                                                                                    className="fa fa-folder"></i>001
                                                                                                Verificare istoric
                                                                                                masuri client -
                                                                                                1</span>
                                                                                        </a>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="tree-branch tree-branch-last">
                                                                                <div className="tree-node">
                                                                                    <a
                                                                                        className="tree-junction">&nbsp;</a>
                                                                                    <span className="tree-content">
                                                                                        <a href="#"
                                                                                            className="tree-content-leaf">
                                                                                            <span
                                                                                                className="tree-label"><i
                                                                                                    className="fa fa-folder"></i>020
                                                                                                Analiza manuala
                                                                                                client - 15</span>
                                                                                        </a>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tree-branch tree-branch-last">
                                                                        <div className="tree-node">
                                                                            <a href="#"
                                                                                className="tree-junction-collapsed">&nbsp;</a>
                                                                            <span className="tree-content">
                                                                                <a href="#"
                                                                                    className="tree-content-node">
                                                                                    <span className="tree-label">(M)
                                                                                        CLICOM Intalnire cu
                                                                                        clientul</span>
                                                                                </a>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tree-branch tree-branch-mid">
                                                                <div className="tree-node" id="node14aa">
                                                                    <a href="#"
                                                                        className="tree-junction-expanded">&nbsp;</a>
                                                                    <span className="tree-content">
                                                                        <a href="#" className="tree-content-node">
                                                                            <span className="tree-label">Completare info
                                                                                in Ibank</span>
                                                                        </a>
                                                                    </span>
                                                                </div>
                                                                <div className="tree-subtree">
                                                                    <div className="tree-branch tree-branch-mid">
                                                                        <div className="tree-node closed">
                                                                            <a href="#"
                                                                                className="tree-junction-collapsed">&nbsp;</a>
                                                                            <span className="tree-content">
                                                                                <a href="#"
                                                                                    className="tree-content-node">
                                                                                    <span className="tree-label">(M)
                                                                                        CLICOM - Solicit Completare
                                                                                        info in Ibank</span>
                                                                                </a>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tree-branch tree-branch-last">
                                                                        <div className="tree-node">
                                                                            <a href="#"
                                                                                className="tree-junction-collapsed">&nbsp;</a>
                                                                            <span className="tree-content">
                                                                                <a href="#"
                                                                                    className="tree-content-node has-actions">
                                                                                    <span className="tree-label">(M)
                                                                                        CLIPRI - Solicit Completare
                                                                                        info in Ibank</span>
                                                                                </a>
                                                                            </span>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tree-branch tree-branch-last">
                                                                <div className="tree-node">
                                                                    <a href="#"
                                                                        className="tree-junction-expanded">&nbsp;</a>
                                                                    <span className="tree-content">
                                                                        <a href="#" className="tree-content-node">
                                                                            <span
                                                                                className="tree-label">Executare</span>
                                                                        </a>
                                                                    </span>
                                                                </div>
                                                                <div className="tree-subtree">
                                                                    <div className="tree-branch tree-branch-last">
                                                                        <div className="tree-node">
                                                                            <a href="#"
                                                                                className="tree-junction-collapsed">&nbsp;</a>
                                                                            <span className="tree-content">
                                                                                <a href="#"
                                                                                    className="tree-content-node">
                                                                                    <span className="tree-label">(M) ENF
                                                                                        Pre-executare CLIPRI</span>
                                                                                </a>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-4 col-lg-4 p-l-0 p-r-0">
                            <div className="panel panel-inline m-0">
                                <div className="panel-heading has-border header-alt p-t-15 p-b-15">
                                    <h2 className="panel-title"><i
                                        className="zmdi zmdi-code-setting zmdi-hc-fw text-primary"></i> Edit node
                                    </h2>
                                </div>
                                <div className="panel-body has-scroll p-l-15 p-r-5">
                                    <div className="p-l-0 p-r-15">
                                        <h4 className="text-primary m-t-0">Call Strategy</h4>
                                        <p>
                                            <small className="m-b-10 b-b">Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                consequat.</small>
                                        </p>
                                        <form id="coduri_form" className="">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input className="form-control input-sm" readonly=""
                                                        value="GROUPITEM%100663" />
                                                    <span className="input-group-btn">
                                                        <button type="button"
                                                            className="btn btn-default btn-sm">Save</button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input id="name" name="name" className="form-control input-sm"
                                                    type="text" />
                                            </div>
                                            <div className="form-group">
                                                <label>Description</label>
                                                <input id="desc" name="desc" className="form-control input-sm"
                                                    type="text" />
                                            </div>
                                            <div className="form-group">
                                                <label>Type</label>
                                                <select id="type" name="type" size="1"
                                                    className="form-control input-sm">
                                                    <option value="String (persistent)">String (persistent)</option>
                                                    <option value="Boolean">Boolean</option>
                                                    <option value="Number">Number</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Direction</label>
                                                <select id="direction" name="direction" size="1"
                                                    className="form-control input-sm">
                                                    <option value="Output">Output</option>
                                                    <option value="Input">Input</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Length</label>
                                                <input id="length" name="length" className="form-control input-sm"
                                                    type="text" />
                                            </div>
                                            <div className="form-group">
                                                <label>Precision</label>
                                                <input id="precision" name="precision" className="form-control input-sm"
                                                    type="text" />
                                            </div>
                                            <div className="form-group">
                                                <label>Scale</label>
                                                <input id="scale" name="scale" className="form-control input-sm"
                                                    type="text" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );


}

Tabs.propTypes = {
    children: PropTypes.arrayOf(Tab)
}


export default Tabs;
