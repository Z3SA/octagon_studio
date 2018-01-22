using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using Octagon.Workers;
using System.Xml;
using System.Windows;
using System.Xml.Linq;

namespace Octagon
{
    public class OMSSession
    {
        public int WinWidth { get; set; }
        public int WinHeight { get; set; }
        public int WinPosTop { get; set; }
        public int WinPosLeft { get; set; }
        public OMSProject Project { get; set; }
        public Queue<OMSProject> LastProjects { get; set; }
        private static string sessionXml = octagon_studio.App.appData + "Session.xml";

        public OMSSession()
        {
            WinWidth = (int)SystemParameters.WorkArea.Width;
            WinHeight = (int)SystemParameters.WorkArea.Height;
            WinPosTop = 0;
            WinPosLeft = 0;

            if (File.Exists(sessionXml))
            {
                XmlNode session = OMSXml.ReadXml(sessionXml);

                if (session.HasChildNodes)
                {
                    for (int i = 0; i < session.ChildNodes.Count; i++)
                    {
                        XmlNode currNode = session.ChildNodes[i];
                        switch(currNode.Name)
                        {
                            case "WindowWidth":
                                WinWidth = Convert.ToInt32(currNode.InnerText);
                                break;
                            case "WindowHeight":
                                WinHeight = Convert.ToInt32(currNode.InnerText);
                                break;
                            case "WindowPosLeft":
                                WinPosTop = Convert.ToInt32(currNode.InnerText);
                                break;
                            case "WindowPosTop":
                                WinPosLeft = Convert.ToInt32(currNode.InnerText);
                                break;
                        }
                    }
                }
            }
        }

        public static void SaveSession(int winWidth, int winHeight, int winPosLeft, int winPosTop)
        {
            XElement session = new XElement("Session");

            session.Add(new XElement("WindowWidth", winWidth));
            session.Add(new XElement("WindowHeight", winHeight));
            session.Add(new XElement("WindowPosLeft", winPosLeft));
            session.Add(new XElement("WindowPosTop", winPosTop));

            OMSXml.WriteXml(sessionXml, session);
        }
    }
}
