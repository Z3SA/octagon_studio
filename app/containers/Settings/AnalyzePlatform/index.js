// Window "Analyze Platform" - Settings window
// Import React
import React, { Component } from 'react';
// Import Ant D components
import { Modal, Steps } from 'antd';
// Import Octagon data
import { octagon, LANG } from '../../../index';
import OMSFile from '../../../data/utils/OMSFile';
import OMSPlatform from '../../../data/content/OMSPlatform';

let LANG__ALANYZE_PLATFORM;
const { Step } = Steps;

export default class AnalyzePlatform extends Component {
    state = {
        visible: false
    }  
    // Showing modal
    showModal = () => {
        this.setState({ visible: true });
    }
    //Hiding modal
    hideModal = () => {
        this.setState({ visible: false });
    }
    
    render() {
        LANG__ALANYZE_PLATFORM = LANG.SETTINGS.ANALYZE_PLATFORM;

        return(
            <Modal
                title={LANG__ALANYZE_PLATFORM.TITLE}
                visible={this.state.visible}
                onCancel={this.hideModal}
                width={600}
                footer={null}
            >
                <Steps progressDot current={0}>
                    <Step 
                        title={LANG__ALANYZE_PLATFORM.STEPS.AUTOFILL.TITLE} 
                    />

                    <Step 
                        title={LANG__ALANYZE_PLATFORM.STEPS.DESC.TITLE}
                        description={LANG__ALANYZE_PLATFORM.STEPS.DESC.DESC}
                    />

                    <Step 
                        title={LANG__ALANYZE_PLATFORM.STEPS.FILES.TITLE}
                        description={LANG__ALANYZE_PLATFORM.STEPS.FILES.DESC}
                    />

                    <Step 
                        title={LANG__ALANYZE_PLATFORM.STEPS.DEBUG.TITLE}
                        description={LANG__ALANYZE_PLATFORM.STEPS.DEBUG.DESC}
                    />

                    <Step 
                        title={LANG__ALANYZE_PLATFORM.STEPS.SDK.TITLE}
                        description={LANG__ALANYZE_PLATFORM.STEPS.SDK.DESC}
                    />
                </Steps>
            </Modal>
        );
    }
}