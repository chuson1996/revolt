import React from 'react';
import { subscribe as mailchimpSubscribe } from 'modules/mailchimp';
import { withState, withHandlers, compose } from 'recompose';
import { InputGroup } from 'theme/form';
import { Div } from 'theme/grid';

export default compose(
  withState('subscribed', 'subscribe', false),
  withHandlers({
    onSubmit: ({ subscribe, category }) => (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      mailchimpSubscribe(email, category)
        .then((data) => {
          subscribe(true);
        });
    }
  })
)(function EmailSubscription({ subscribed, onSubmit, subtitle, cta, thankYouMessage, title, category, ...rest }) {
  return (
    subscribed ?
      <Div {...rest}>
        <h2>{thankYouMessage}</h2>
      </Div>:
      <Div {...rest}>
        {typeof title === 'string' && <h2 className="balance-text">{title}</h2>}
        {typeof title === 'object' && title}
        <form onSubmit={onSubmit}>
          <InputGroup marginTop="25px">
            <input name="email" type="email" placeholder={'Email'}/>
            <button>{cta}</button>
          </InputGroup>
        </form>
        {typeof subtitle === 'string' && <p className="balance-text">{subtitle}</p>}
        {typeof subtitle === 'object' && subtitle}
      </Div>
  );
})
