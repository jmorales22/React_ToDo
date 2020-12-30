import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Footer } from 'react-bulma-components';

function AppFooter() {
  return (
    <Footer className="footer">
    <div className="content has-text-centered">
      <p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
      </p>
    </div>
  </Footer>
    );
}

export default AppFooter;
