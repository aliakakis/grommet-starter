import React, {Component, PropTypes} from 'react';
import Animate from 'grommet/components/Animate';

export const RouteTransition = (options = {"animation": "fade", "duration": 1000, "delay": 0}) => (TargetComponent) => {
    class EnhanceComponent extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <Animate visible={true}
                         enter={options}
                         keep={true}>
                    <TargetComponent {...this.props}/>
                </Animate>
            );
        };
    }

    EnhanceComponent.defaultProps = {

    };

    EnhanceComponent.propTypes = {

    };

    return EnhanceComponent;
};

