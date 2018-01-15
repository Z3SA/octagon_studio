using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.IO;

namespace Octagon.Workers
{
    // Util class: XML
    public class OMSXml
    {
        private string path;

        // Full constructor
        public OMSXml(string path)
        {
            this.path = path;
        }

        // Creating new XML file 
        public void CreateXml(string rootElem)
        {
            XmlTextWriter projectXMLWriter = new XmlTextWriter(path, Encoding.UTF8);
            projectXMLWriter.WriteStartDocument();
            projectXMLWriter.WriteStartElement(rootElem);
            projectXMLWriter.WriteEndElement();
            projectXMLWriter.Close();
        }

        // Creating new XML file (static version)
        public static void CreateXml(string path, string rootElem)
        {
            XmlTextWriter projectXMLWriter = new XmlTextWriter(path, Encoding.UTF8);
            projectXMLWriter.WriteStartDocument();
            projectXMLWriter.WriteStartElement(rootElem);
            projectXMLWriter.WriteEndElement();
            projectXMLWriter.Close();
        }
    }
}
