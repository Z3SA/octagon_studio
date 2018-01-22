using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Windows;
using Octagon.Workers;
using System.Xml.Linq;

namespace Octagon
{
    // Class contains data about current build of Octagon Studio
    public class OMS
    {
        public string Version { get; set; }
        public OMSLanguage Lang { get; set; }
        public OMSSession Session { get; set; }
        private static string octagonXml = octagon_studio.App.appData + "Octagon.xml";

        public OMS()
        {
            string version = "Mk 0";
            string lang = "en";

            XmlNode octagonCfg = OMSXml.ReadXml(octagonXml);

            if (octagonCfg.HasChildNodes)
            {
                for (int i = 0; i < octagonCfg.ChildNodes.Count; i++)
                {
                    XmlNode currNode = octagonCfg.ChildNodes[i];
                    switch (currNode.Name)
                    {
                        case "Version":
                            version = currNode.InnerText;
                            break;
                        case "Language":
                            lang = currNode.InnerText;
                            break;
                    }
                }
            }

            Version = version;
            Lang = OMSLanguage.LoadLanguage(lang);
            Session = new OMSSession();
        }

        public OMS(string version, OMSLanguage lang)
        {
            Version = version;
            Lang = lang;
        }

        public void Save(string lang)
        {
            string currentLang = (lang == null) ? Lang.Abbr : lang;

            XElement octagonCfg = new XElement("Octagon");

            octagonCfg.Add(new XElement("Version", Version));
            octagonCfg.Add(new XElement("Language", currentLang));

            OMSXml.WriteXml(octagonXml, octagonCfg);
        }
    }
}
