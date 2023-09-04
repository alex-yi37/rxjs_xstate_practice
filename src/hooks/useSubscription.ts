import { useEffect, useState } from "react";
import { Observable, Observer } from "rxjs";

export function useSubscription<T>(
  source$: Observable<T>,
  handlers: (value: T) => void
) {
  useEffect(() => {
    if (source$) {
      const subs = source$.subscribe(handlers);

      return () => {
        subs.unsubscribe();
      };
    }

    // if the "observer" param is typed as: Partial<Observer<any>>
    // eslint complains that we haven't added the observer param
    // to the dependency array. We don't necessarily want to add observer
    // to the array bc if we pass in a plain object ({}) for the observer while
    // also including observer in the array, then the effect will just keep on tearing
    // down and resubscribing over and over again

    // in video, the Partial<Observer<any>> typing is not used in the end, opts for manually typing
    // as observer: (value: T) =>  void (though eventually renames "observer" to "handlers")
  }, [source$]);
}
