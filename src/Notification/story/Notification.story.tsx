import React, { Fragment } from 'react';
import { CustomNotification } from './CustomNotification';
import { Notifications } from '../Notifications';
import { NotificationsContext } from '../NotificationsContext';

export default {
  title: 'Notification',
  component: Notifications
};

export const Title = () => (
  <Notifications>
    <NotificationsContext.Consumer>
      {({ notify, clearAllNotifications }) => (
        <Fragment>
          <button onClick={() => notify(`Hello! ${Math.random()}`)}>
            Show
          </button>
          <br />
          <br />
          <button onClick={() => clearAllNotifications()}>Clear</button>
        </Fragment>
      )}
    </NotificationsContext.Consumer>
  </Notifications>
);

export const TitleAndBody = () => (
  <Notifications>
    <NotificationsContext.Consumer>
      {({ notify, clearAllNotifications: clearAll }) => (
        <Fragment>
          <button
            onClick={() =>
              notify('New Message Alert!', { body: 'You have a new message' })
            }
          >
            Title + Text Body
          </button>
          <br />
          <br />
          <button
            onClick={() =>
              notify('Welcome', {
                body: <h3>Hello Friend!</h3>
              })
            }
          >
            Title and Body Content
          </button>
          <br />
          <br />
          <button onClick={() => clearAll()}>Clear</button>
        </Fragment>
      )}
    </NotificationsContext.Consumer>
  </Notifications>
);

export const Variants = () => (
  <Notifications>
    <NotificationsContext.Consumer>
      {({
        notifySuccess,
        notifyError,
        notifyWarning,
        clearAllNotifications: clearAll
      }) => (
        <Fragment>
          <button onClick={() => notifySuccess('Something good happened!')}>
            Success
          </button>
          <button onClick={() => notifyError('Something bad happened!')}>
            Error
          </button>
          <button
            onClick={() => notifyWarning('Something questionable happened!')}
          >
            Warning
          </button>
          <br />
          <br />
          <button onClick={() => clearAll()}>Clear</button>
        </Fragment>
      )}
    </NotificationsContext.Consumer>
  </Notifications>
);

export const FloodPrevention = () => (
  <Notifications>
    <NotificationsContext.Consumer>
      {({ notify, clearAllNotifications: clearAll }) => (
        <Fragment>
          <button
            onClick={() => {
              for (let i = 0; i < 20; i++) {
                setTimeout(() => notify('Something bad happened!'), 50);
              }
            }}
          >
            Flood
          </button>
          <br />
          <br />
          <button onClick={() => clearAll()}>Clear</button>
        </Fragment>
      )}
    </NotificationsContext.Consumer>
  </Notifications>
);

export const CustomComponent = () => (
  <Notifications
    Components={{
      default: CustomNotification,
      success: CustomNotification,
      warning: CustomNotification,
      error: CustomNotification
    }}
  >
    <NotificationsContext.Consumer>
      {({ notify, clearAllNotifications }) => (
        <Fragment>
          <button onClick={() => notify('Default')}>Custom Default</button>
          <button onClick={() => notify('Success', { variant: 'success' })}>
            Custom Success
          </button>
          <button onClick={() => notify('Warning', { variant: 'warning' })}>
            Custom Warning
          </button>
          <button onClick={() => notify('Error', { variant: 'error' })}>
            Custom Error
          </button>
          <br />
          <br />
          <button onClick={() => clearAllNotifications()}>Clear</button>
        </Fragment>
      )}
    </NotificationsContext.Consumer>
  </Notifications>
);
