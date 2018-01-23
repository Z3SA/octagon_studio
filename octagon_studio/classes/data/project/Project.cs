using System;
using System.Collections.Generic;
using Octagon.Workers;
using Octagon.Program;
using System.IO;
using System.Xml.Linq;

namespace Octagon.Project
{
    // Class: Project
    public class OMSProject
    {
        public string Name { get; set; }
        public string Id { get; set; }
        public OMSPlatform Platform { get; set; }
        public List<string> Authors { get; set; }
        public string Folder { get; set; }

        public string FolderOctagon => Folder + "\\.octagon";
        public string ProjectXml => (Folder == null) ? null : FolderOctagon + "\\Project.xml";

        // Empty constructor
        public OMSProject() {
            Name = null;
            Id = null;
            Platform = null;
            Authors = null;
        }

        // Full constructor
        public OMSProject(string name, string id, OMSPlatform platform, List<string> authors, string folder)
        {
            Name = name;
            Id = id;
            Platform = platform;
            Authors = authors;
            Folder = folder;
        }

        // Constructor from project folder
        public OMSProject(string projectFolder)
        {
            if (projectFolder != "")
            {
                string folder = projectFolder;
                dynamic EXCEPTIONS = octagon_studio.App.language.MAIN_WINDOW.TOP_MENU.FILE_EXCEPTIONS;

                if (!Directory.Exists(folder))
                {
                    throw new Exception("" + EXCEPTIONS.DIR_NOT_OF_PROJECT);
                }

                if (!File.Exists(folder + "\\Octagox.xml"))
                {
                    throw new Exception("" + EXCEPTIONS.DIR_NOT_HAVE_OCTAGON_XML);
                }
            }
        } 

        // Creating new project in some folder
        public void CreateNew(string folder)
        {
            OMSFile.CheckCapacity(folder.Substring(0, 3), (long) 100);

            string octagonDir = folder + @"\.octagon\";
            Directory.CreateDirectory(octagonDir);

            string projectXML = octagonDir + @"\Project.xml";

            XElement inXmlProject = new XElement("Project");

            inXmlProject.Add(new XElement("Name", Name));
            inXmlProject.Add(new XElement("WorkID", Id));
            inXmlProject.Add(new XElement("PlatformName", Platform.Type));
            inXmlProject.Add(new XElement("PlatformVersion", Platform.Version));

            XElement inXmlAuthors = new XElement("Authors");

            for (int i = 0; i < Authors.Count; i++)
            {
                inXmlAuthors.Add(new XElement("Author", Authors[i]));
            }

            inXmlProject.Add(inXmlAuthors);

            inXmlProject.Add(new XAttribute("OctagonVersion", octagon_studio.App.octagon.Version));
            inXmlProject.Add(new XAttribute("OctagonLang", octagon_studio.App.octagon.Lang.Abbr));

            OMSXml.WriteXml(projectXML, inXmlProject);
        }
    }
}
