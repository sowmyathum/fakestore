import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Login } from './components/login/login'
import { Demo } from './components/demo/demo';
import { DataBinding } from './components/databinding/Databinding';

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Flipkart } from './components/flipkart/flipkart';
import { Nasa } from './components/nasa/nasa';
import { EventBinding } from './components/EventBinding/event-binding';
import { MouseDemo } from './components/MouseDemo/mouse-demo';
import { MouseMove } from './components/MouseMove/mouse-move';
import { KeyDemo } from './components/KeyDemo/key-demo';
import { MouseTask } from './components/MouseTask/mouse-task';
import { KeyboardDemo } from './components/KeyboardDemo/keyboard-demo';
import { PasswordStrength } from './components/PasswordStrength/password-strength';
import { FocusDemo } from './components/FocusDemo/focus-demo';
import { DebounceDemo } from './components/DebounceDemo/debounce-demo';
import { TimerDemo } from './components/TimerDemo/timer-demo';
import { TimeoutDemo } from './components/time-out-demo/time-out-demo';
import { CarouselDemo } from './components/carousel-demo/carousel-demo';
import { LoadingStatus } from './components/loading-status/loading-status';
import { StopWatch } from './components/stopwatch/stopwatch';
import { FormDemo } from './components/form-demo/form-demo';
import { ContextDemo } from './components/ContextDemo/context-demo';
import { TransportDemo } from './components/Transport-Demo/transport-demo';
import { SearchProducts } from './Fakestore/search-products';
import { TutorialIndex } from './components/TutorialIndexDemo/tutorial-index';
import { FakeStoreIndex } from './shopping/fakestore-index';
import { VideoLibraryIndex } from './video-library/video-library-index';
import { CookiesProvider } from 'react-cookie';

createRoot(document.getElementById('root')).render(
  <SearchProducts/>
  
  
)
