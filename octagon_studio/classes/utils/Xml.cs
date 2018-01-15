using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.IO;
using System.Xml.Linq;

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

        // Writing XML file
        public static void WriteXml(string path, XElement content)
        {
            XDocument xml = new XDocument();
            xml.Add(content);
            xml.Save(path);
        }

        // Reading XML file and return main tag (first element after element with XML version and encode)
        public static XmlNode ReadXml(string path)
        {
            XmlDocument file = new XmlDocument();
            file.Load(path);

            return file.FirstChild.NextSibling;
        }
    }
}
