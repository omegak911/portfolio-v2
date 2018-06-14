import React, { Component } from 'react';
import axios from 'axios';

import contactCSS from './ContactCSS';

const Contact = () =>
  <div id="contact">
    <div className="contactButton">
      <a href="mailto:xkinchanx@gmail.com"><div>Let's Connect!</div></a>
    </div>
    <style jsx>{contactCSS}</style>
  </div>

export default Contact;