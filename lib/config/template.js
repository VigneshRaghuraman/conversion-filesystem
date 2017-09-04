/**
 * Created by Vignesh on 25/08/17.
 */

module.exports = {
   TEMPLATE : {
       content: "<DOCTYPE html> <body><article><header><h4 style= text-align: center;> <img src= smiley.jpg alt= Smiley face width= 80 height= 80  align= middle hspace= 35 vspace = 10 /><span style = color: green;>&nbsp; &nbsp; &nbsp; <%=obj.companyName%></span></h4> </header></article><article><hr /><br /> <br /> <br /> <br /><div><table style= height: 450px; margin-left: auto; margin-right: auto;  border= 2 width = 380 align='center' id = myTable><head><style> td { align-content: center; border: 1px solid green } hr { border-color: #14aeff }span { color : #bc1115}td {color : rgba(116,12,208,0.81)}</style></head> <body><tbody> <tr><th>Sno</th><th>Amount</th><th style= text-align: center;>name</th><th style= text-align: center;>emailId</th></tr><tr><td style= text-align: center;>January</td><td style= text-align: center;><%=obj.amount%></td><td style= text-align: center;><%=obj.name%></td><td style= text-align: center;><%=obj.emailId%></td></tr><tr><td style= text-align: center;>February</td><td style= text-align: center;>$80</td></tr></tbody></table><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p></div><article><footer><hr /><p>&nbsp;</p></footer></article></article><script></script></body> </html>"
   }
};

