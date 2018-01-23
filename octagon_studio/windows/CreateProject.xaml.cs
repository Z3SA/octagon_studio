using System;
using System.Windows;
using System.Windows.Input;
using System.Text.RegularExpressions;
using System.Collections.Generic;
using Octagon;
using Octagon.Workers;
using System.IO;

namespace octagon_studio.windows
{
    /// <summary>
    /// Логика взаимодействия для CreateProject.xaml
    /// </summary>
    public partial class CreateProject : Window
    {
        // Language pack of window
        dynamic LANG_CREATE_PROJECT = App.language.CREATE_PROJECT;

        public CreateProject()
        {
            InitializeComponent();
            DataContext = LANG_CREATE_PROJECT;

            // Apply input mask for field "Project ID"
            projectID.PreviewTextInput += new TextCompositionEventHandler(CheckID);
        }

        // Click event on button with folder (find folder for project)
        private void FindFolder(object sender, RoutedEventArgs e)
        {
            projectFolder.Text = OMSFile.FindFolder();
        }

        // Correcting input of project ID
        private void CheckID(object sender, TextCompositionEventArgs e)
        {
            Regex inputRegex = new Regex(@"^([a-zA-Z]|[0-9]|-|_)+$");
            Match matchInput = inputRegex.Match(e.Text);

            if (!matchInput.Success) e.Handled = true;
        }

        // Creating new project on folder in field
        private void NewProject(object sender, RoutedEventArgs e)
        {
            try
            {
                string folder = projectFolder.Text;

                // If project name field is empty
                if (String.IsNullOrWhiteSpace(projectName.Text))
                {
                    throw new Exception(LANG_CREATE_PROJECT.PROCESS.ERROR__WRONG_NAME);
                }

                // If project ID field is empty
                if (String.IsNullOrWhiteSpace(projectID.Text))
                {
                    throw new Exception(LANG_CREATE_PROJECT.PROCESS.ERROR__WRONG_ID);
                }

                // If project folder field is empty
                if (String.IsNullOrWhiteSpace(folder))
                {
                    throw new Exception(LANG_CREATE_PROJECT.PROCESS.ERROR__WRONG_DIR);
                }

                // If specified folder for project contains another project
                if (Directory.Exists(folder + "\\.octagon"))
                {
                    throw new Exception(LANG_CREATE_PROJECT.PROCESS.ERROR__ALREADY_EXISTS);
                }
                else
                {
                    // Separating authors
                    List<string> allAuthors = new List<string>();
                    string authors = projectAuthors.Text;
                    if (authors != String.Empty)
                    {
                        string[] currentAuthors = authors.Split(',');

                        for (int i = 0; i < currentAuthors.Length; i++) allAuthors.Add(currentAuthors[i]);
                    }

                    // Info about platform
                    OMSPlatform currentPlatform = new OMSPlatform(projectPlatform.Text, projectVersion.Text, folder);
                    // Object of project
                    OMSProject project = new OMSProject(projectName.Text, projectID.Text, currentPlatform, allAuthors, folder);
                    // Saving project in folder
                    project.CreateNew(folder);
                    // Changing current project in program
                    App.ChangeProject(project);
                    // Closing window
                    Close();
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
    }
}
