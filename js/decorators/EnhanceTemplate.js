/*
 *   High order component template
 * */

import React, {Component, PropTypes} from 'react';

export const EnhanceDecorator = (options) => (TargetComponent) => {
    class EnhanceComponent extends React.Component {

        constructor(props) {
            super(props);
            this.state = {};
        }

        render = () => {
            return (
                <ComposedComponent {...this.props} {...this.state} />
            );
        };
    }

    EnhanceComponent.defaultProps = {

    };

    EnhanceComponent.propTypes = {

    };

    return EnhanceComponent;
};

