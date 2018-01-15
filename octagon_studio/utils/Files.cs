using System;
using System.Xml;
using System.Text;

namespace Octagon.Utils
{
    class OctagonFile
    {

    }

    public class OctagonXml
    {
        string path;
        XmlTextWriter xmlWriter;

        public OctagonXml(string path)
        {
            this.path = path;
        }

        public void createXml(string rootElem)
        {
            XmlTextWriter projectXMLWriter = new XmlTextWriter(path, Encoding.UTF8);
            projectXMLWriter.WriteStartDocument();
            projectXMLWriter.WriteStartElement(rootElem);
            projectXMLWriter.WriteEndElement();
            projectXMLWriter.Close();
        }

        static public void createXml(string path, string rootElem)
        {
            XmlTextWriter projectXMLWriter = new XmlTextWriter(path, Encoding.UTF8);
            projectXMLWriter.WriteStartDocument();
            projectXMLWriter.WriteStartElement(rootElem);
            projectXMLWriter.WriteEndElement();
            projectXMLWriter.Close();
        }
    }
}
