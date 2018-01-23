using System.Xml;
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

        // Reading XML file and returning main tag (first element after element with XML version and encode)
        public XmlNode ReadXml()
        {
            XmlDocument file = new XmlDocument();
            file.Load(path);

            return file.FirstChild.NextSibling;
        }

        // Reading XML file and returning main tag (static)
        public static XmlNode ReadXml(string path)
        {
            XmlDocument file = new XmlDocument();
            file.Load(path);

            return file.FirstChild.NextSibling;
        }
    }
}
