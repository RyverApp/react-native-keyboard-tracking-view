declare module "react-native-keyboard-tracking-view" {
    import React from 'react';
    import { ViewProps } from 'react-native';

    // need to handle -1 default value
    enum ScrollBehavior {
        None,
        ScrollToBottomInvertedOnly,
        FixedOffset
    }

    export interface KeyboardTrackingViewProps extends ViewProps {
        scrollBehavior?: ScrollBehavior;
        revealKeyboardInteractive?: boolean;
        manageScrollView?: boolean;
        requiresSameParentToManageScrollView?: boolean;
        addBottomView?: boolean;
        scrollToFocusedInput?: boolean;
        allowHitsOutsideBounds?: boolean;
    }
    
    export class KeyboardTrackingView extends React.Component<KeyboardTrackingViewProps> {
        constructor(props: KeyboardTrackingViewProps);
    }

    export class KeyboardAwareInsetsView extends React.Component<KeyboardTrackingViewProps> {
        constructor(props: KeyboardTrackingViewProps);
    }
}
