# Roadmap - 2026

This document summarizes the priorities for the WowFinder project for the first part of 2026 and the basic justification for them.

1. `model`: Code consolidation, ensuring 100% test coverage. This is necessary to ensure that the code imported from the old repo is consistent, and will allow the module to be used reliably in other modules.

1. `react-components`: Migration of all functionality that already existed in the old repo, mainly character sheets and a basic view for spells and lists.

1. `bridge-electron` and new repo for desktop app: minimal wrappers to expose the previous components in a desktop application.

1. `react-components`: basic presentation and web navigation components.

1. `bridge-https` and `web`: web implementation (with Next.js) of the main page and access to public content (spells and lists, common items, standard recipes, etc).

The first steps are aimed at completely discarding the monolithic version of the application, and the following at providing a basic interface for accessing campaign materials to reduce dependence on other services such as Google Drive (where most materials are currently hosted and shared for player reference).
