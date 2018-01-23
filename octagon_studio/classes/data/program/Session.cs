using System;
using System.Collections.Generic;
using System.IO;
using Octagon.Workers;
using Octagon.Project;
using System.Xml;
using System.Windows;
using System.Xml.Linq;

namespace Octagon.Program
{
    public class OMSSession
    {
        // Window width
        public int WinWidth { get; set; }
        // Window height
        public int WinHeight { get; set; }
        // Window position - top
        public int WinPosTop { get; set; }
        // Window position - left
        public int WinPosLeft { get; set; }
        // Last or current project of session
        public OMSProject Project { get; set; }
        // Last 10 opened projects in program
        public Queue<OMSProject> LastProjects { get; set; }
        // Path to Session.xml 
        private static string sessionXml = octagon_studio.App.appData + "Session.xml";

        // Loading last session from Session.xml or making fullscreen if Session.xml doesn't exist
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

        // Saving session on closing of program
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
