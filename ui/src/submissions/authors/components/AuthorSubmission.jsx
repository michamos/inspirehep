import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Alert } from 'antd';
import { Formik } from 'formik';
import { object } from 'yup';

import AuthorForm from './AuthorForm';
import authorSchema from '../schemas/author';
import cleanupFormData from '../../common/cleanupFormData';
import { convertAllImmutablePropsToJS } from '../../../common/immutableToJS';

const DEFAULT_FORM_DATA = authorSchema.cast();

class AuthorSubmission extends Component {
  constructor(props) {
    super(props);

    this.onFormikSubmit = this.onFormikSubmit.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  async onFormikSubmit(values, actions) {
    const { onSubmit } = this.props;
    const cleanValues = cleanupFormData(values);
    await onSubmit(cleanValues);
    if (this.mounted) {
      actions.setSubmitting(false);
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { error, initialFormData, extendSchema } = this.props;
    const initialValues = {
      ...DEFAULT_FORM_DATA,
      ...initialFormData,
    };
    return (
      <Row>
        {error && (
          <Row className="mb3">
            <Col>
              <Alert message={error.message} type="error" showIcon closable />
            </Col>
          </Row>
        )}
        <Row>
          <Col>
            <Formik
              initialValues={initialValues}
              validationSchema={authorSchema.concat(extendSchema)}
              onSubmit={this.onFormikSubmit}
              validateOnChange={false}
              component={AuthorForm}
            />
          </Col>
        </Row>
      </Row>
    );
  }
}

AuthorSubmission.propTypes = {
  error: PropTypes.objectOf(PropTypes.any), // must have 'message'
  initialFormData: PropTypes.objectOf(PropTypes.any),
  onSubmit: PropTypes.func.isRequired, // must be async
  extendSchema: PropTypes.instanceOf(object),
};

AuthorSubmission.defaultProps = {
  initialFormData: DEFAULT_FORM_DATA,
  extendSchema: object(),
  error: null,
};

export default convertAllImmutablePropsToJS(AuthorSubmission);
