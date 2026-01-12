import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { LANG } from "../constants/languages";
import { supabase } from "../services/supabaseClient";


const BigSisContext = createContext();

function BigSisProvider({ children }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));

    const { data: sub } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => sub.subscription.unsubscribe();
  }, []);

    return (
      <BigSisContext.Provider value={{ session, user: session?.user }}>
        {children}
      </BigSisContext.Provider>
    );
};

BigSisProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { BigSisContext, BigSisProvider };
