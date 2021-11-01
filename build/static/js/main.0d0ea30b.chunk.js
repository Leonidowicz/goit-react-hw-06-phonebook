(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(4),c=n.n(a),i=(n(14),n(15),n(2)),u={addName:"ContactForm/Name",addNumber:"ContactForm/Number",addContact:"ContactForm/Contact",contactDelite:"ContactForm/ContactDelite",filt:"ContactForm/filt"},l=n(23),d=n(1),s=Object(i.b)((function(t){return{contacts:t.contacts,name:t.name,number:t.number}}),(function(t){return{onName:function(e){var n,r,o;return t((o=null!==(n=null===(r=e.target)||void 0===r?void 0:r.value)&&void 0!==n?n:e,{type:u.addName,payload:o}))},onNumber:function(e){var n,r,o;return t((o=null!==(n=null===(r=e.target)||void 0===r?void 0:r.value)&&void 0!==n?n:e,{type:u.addNumber,payload:o}))},onAddContact:function(e){return t(function(t){return{type:u.addContact,payload:t}}(e))}}}))((function(t){var e=t.name,n=t.number,r=t.contacts,o=t.onName,a=t.onNumber,c=t.onAddContact;return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault();var i={id:Object(l.a)(),name:e,number:n};""!==n?(o("TestName"),a("+380661234567"),r.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))?alert("".concat(e," is already in contacts")):c(i)):alert("phone number is required")},children:[Object(d.jsxs)("label",{children:["Name",Object(d.jsx)("input",{type:"text",placeholder:"Enter name",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:e,required:!0,onChange:o}),"Phone number",Object(d.jsx)("input",{type:"tel",placeholder:"Enter phone number",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:n,onChange:a})]}),Object(d.jsx)("button",{type:"submit",children:"Add contact"})]})})),m=Object(i.b)((function(t){return{filter:t.filt}}),(function(t){return{filt:function(e){return t((n=e.target.value,{type:u.filt,payload:n}));var n}}}))((function(t){var e=t.filter,n=t.filt;return Object(d.jsxs)("label",{children:["Find phone number by name",Object(d.jsx)("input",{name:"filter",type:"text",value:e,onChange:n})]})})),b=Object(i.b)((function(t){var e,n,r=t.filt,o=t.contacts;return{contacts:o,filteredContacts:(e=o,n=r,e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})))}}),(function(t){return{onDellContact:function(e){return t(function(t){return{type:u.contactDelite,payload:t}}(e))}}}))((function(t){var e=t.filteredContacts,n=t.onDellContact;return Object(d.jsx)("ul",{children:e.map((function(t){var e=t.id,r=t.name,o=t.number;return Object(d.jsxs)("li",{children:[r,": ",o,Object(d.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})})),f=function(){return Object(d.jsxs)("div",{className:"App-header",children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(s,{}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(m,{}),Object(d.jsx)(b,{})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),r(t),o(t),a(t),c(t)}))},p=n(3),j=n(8),v=n(9),C="BORIS",O="+38 066 123 4567",y=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],g=Object(p.combineReducers)({contacts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload;switch(n){case"ContactForm/Contact":return[].concat(Object(v.a)(t),[r]);case"ContactForm/ContactDelite":return t.filter((function(t){return t.id!==r}));default:return t}},name:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload;switch(n){case"ContactForm/Name":return r;default:return t}},number:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload;switch(n){case"ContactForm/Number":return r;default:return t}},filt:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload;switch(n){case"ContactForm/filt":return r;default:return t}}}),x=Object(p.createStore)(g,Object(j.composeWithDevTools)());c.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(i.a,{store:x,children:Object(d.jsx)(f,{})})}),document.getElementById("root")),h()}},[[21,1,2]]]);
//# sourceMappingURL=main.0d0ea30b.chunk.js.map