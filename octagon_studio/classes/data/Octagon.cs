using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Windows;

namespace Octagon
{
    // Class contains data about current build of Octagon Studio
    public class OMS
    {
        public string Version { get; set; }
        public OMSLanguage Lang { get; set; }

        public OMS(string version, OMSLanguage lang)
        {
            Version = version;
            Lang = lang;
        }

        public static OMS LoadConfig()
        {
            string version = "0.0.0";
            string lang = "en";

            XmlDocument config = new XmlDocument();
            config.Load(octagon_studio.App.appData + "Octagon.xml");

            XmlNode octagonCfg = config.FirstChild.NextSibling;

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

            return new OMS(version, OMSLanguage.LoadLanguage(lang));
        }
    }
}
